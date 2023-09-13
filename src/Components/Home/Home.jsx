import { Suspense, lazy, useState } from "react";

const Header = lazy(() => import("../Header/Header"));

import cx from "classnames";
import s from "./style.module.scss";
import { ReactSVG } from "react-svg";
import { Table } from "react-bootstrap";
import SelectBox from "../SelectBox/SelectBox";

import rawMaterial from "../../assets/rawMaterial.json";
import inventoryRawData from "../../assets/inventoryData.json";

const outletOptions = [...new Set(rawMaterial.map(item => item["OUTLET NAME"]))]?.flatMap(item => item ? [{ label: item, value: item }] : []);

export default function Home() {
    const [outlet, setOutlet] = useState(null);
    const [product, setProduct] = useState(null);
    const [produtList, setProdutList] = useState([]);
    const [quantity, setQuantity] = useState("");
    const [requiredMaterials, setRequiredMaterials] = useState([])

    const handleOutletChange = (v) => {
        setOutlet(v.value[0]);
        setProduct(null)

        const filteredRawMaterial = [...new Set(rawMaterial?.flatMap(item => {
            if (item["OUTLET NAME"] === v.value[0])
                return [item["Recipe Name"]]
            return [];
        }))].map(item => ({ label: item, value: item }))

        setProdutList(filteredRawMaterial || []);
        setRequiredMaterials([])

    }
    const handleProductChange = (v) => {
        setProduct(v.value[0]);
    }
    const handleQtyChange = (e) => {
        console.log("alkdfjlkasdjf", e.target.value)
        setQuantity(e.target.value);
    }

    const handleCheckRequirementClick = () => {
        const rawMaterialList = rawMaterial?.filter(item => {
            if (item["OUTLET NAME"] === outlet)
                if (item["Recipe Name"] === product)
                    return true;
            return false;
        }).map(item => {
            let inventoryData = {};
            inventoryData = inventoryRawData.find(inventory => inventory["Item Code"] === item["Ingredient Code"])
            console.log("in", item["Item Name"], item["Ingredient Name"], inventoryData)
            return {
                ...item,
                inventoryData
            }
        });
        console.log("rawMaterialListrawMaterialListrawMaterialList", rawMaterialList)
        setRequiredMaterials(rawMaterialList)
    }

    const handleClearClick = () => {
        setOutlet(null);
        setProduct(null);
        setProdutList([]);
        setQuantity("");
        setRequiredMaterials([])
    }

    return (
        <div className={s.main}>
            <Suspense>
                <Header />
            </Suspense>
            <div className="pt-4 container" style={{ maxWidth: 1200 }}>
                <center><b>Product details</b></center>
                <center><p>Enter the outlet name, product name and manufacturing quantity to view the inventory requirements.</p></center>
                <div className={s.filterContainer}>
                    <div className={s.filterItem}>
                        <label>Outlet name</label>
                        <SelectBox
                            onClose={console.log}
                            isMultiSelect={false}
                            onOpen={console.log}
                            options={outletOptions || []}
                            name="state"
                            value={outlet ? [outlet] : []}
                            onChange={handleOutletChange}
                        />
                        {/* <div className={s.selectBoxContainer}>
                            <select>
                                <option>Hello</option>
                            </select>
                            <div className={s.downArrow}>
                                <ReactSVG src="/downArrow.svg" />
                            </div>
                        </div> */}
                    </div>
                    <div className={s.filterItem}>
                        <label>Product name</label>
                        <SelectBox
                            onClose={console.log}
                            isMultiSelect={false}
                            onOpen={console.log}
                            options={produtList || []}
                            name="product"
                            value={product ? [product] : []}
                            onChange={handleProductChange}
                        />
                        {/* <div className={s.selectBoxContainer}>
                            <select>
                                <option>Hello</option>
                            </select>
                            <div className={s.downArrow}>
                                <ReactSVG src="/downArrow.svg" />
                            </div>
                        </div> */}
                    </div>
                    <div className={s.filterItem}>
                        <label>Manufacturing quantity</label>
                        <input name="quantity" value={quantity} onChange={handleQtyChange} />
                    </div>
                </div>
                <div className={s.buttonContainer}>
                    <button disabled={!(outlet || product || quantity)} onClick={handleClearClick}>Clear</button>
                    <button disabled={!outlet || !product || !quantity} className={s.primary} onClick={handleCheckRequirementClick}>Check requirements</button>
                </div>
                <div className={s.head3}>
                    Inventory requirements for <span>CK Chocolate bar 50 g</span>
                </div>


                <div className={s.smallDesc}>Here are the following inventory items required for manufacturing specified quantity</div>

                <Table className={s.table} size="sm">
                    <thead>
                        <tr>
                            <th>Item list</th>
                            <th>Measurements</th>
                            <th>Quantity</th>
                            <th>Total Quantity</th>
                            <th>Current Stock</th>
                            <th>Remaining Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requiredMaterials?.map(item => {
                            return (<tr>
                                <td>{item["Ingredient Name"]}</td>
                                <td>{item["Conversion Qty"]} {item["Conversion Type"]}</td>
                                <td>{quantity}</td>
                                <td>{(item["Conversion Qty"] * quantity).toFixed(2)}</td>
                                <td>{item?.inventoryData?.["Qty"]}</td>
                                <td>{item?.inventoryData?.["Qty"] - (item["Conversion Qty"] * quantity) || "-"}</td>
                            </tr>)
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </tfoot>
                </Table>
            </div>
        </div>
    )
}
