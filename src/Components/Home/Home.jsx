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
        setQuantity(e.target.value);
    }

    const handleCheckRequirementClick = () => {
        const rawMaterialList = rawMaterial?.filter(item => { // filter items by selected outlet and product
            if (item["OUTLET NAME"] === outlet)
                if (item["Recipe Name"] === product)
                    return true;
            return false;
        }).map(item => { // Include the stock data
            let inventoryData = {};
            inventoryData = inventoryRawData.filter(inventory => {
                if (inventory?.PRODUCTTYPE === "RAW MATERIALS")
                    if (inventory["Item Code"] === item["Ingredient Code"])
                        return true;
                return false;
            })
            return {
                ...item,
                inventoryData: {
                    Qty: inventoryData?.reduce((v, item) => +item?.["Qty"] + v, 0),
                    UOM: inventoryData?.[0]?.["UOM"],
                    name: inventoryData?.[0]?.["Item Name"],

                }
            }
        });
        // Revamp the data for table list

        let normalizedRawMaterialList = rawMaterialList.map(item => {
            let currentStockType = "";
            if (item?.inventoryData?.["UOM"] === "NOS") {

            }
            let currentStock = !item?.inventoryData?.Qty ? "0 GRAM" : `${item?.inventoryData?.["Qty"]} ${item?.inventoryData?.["UOM"] === "NOS" ? item["Ingredient Name"]?.includes("KG") ? "KG" : "NOS" : (item?.inventoryData?.["UOM"]?.toString()?.trim() || "NOS")}`,
                requiredStock = `${(item["Conversion Qty"] * quantity).toFixed(2)} ${item["Conversion Type"]}`;
            console.table({
                currentStock
            })
            return {
                ingredientName: item["Ingredient Name"],
                measurement: `${item["Conversion Qty"]} ${item["Conversion Type"]}`,
                quantity,
                requiredStock,
                currentStock: currentStock == "0 GRAM" ? 0 : currentStock,
                remainingStock: currentStock == "0 GRAM" ? `-${requiredStock}` : subtractValues(
                    currentStock || 0,
                    `${(item["Conversion Qty"] * quantity).toFixed(2)} ${item["Conversion Type"]}`
                )
            }
        })
        console.log("rawMaterialListrawMaterialListrawMaterialList", rawMaterialList)
        setRequiredMaterials(normalizedRawMaterialList)
    }

    const handleClearClick = () => {
        setOutlet(null);
        setProduct(null);
        setProdutList([]);
        setQuantity("");
        setRequiredMaterials([])
    }


    function subtractValues(value1, value2) {
        // Extract numeric values and units
        let [num1, unit1] = value1.split(' ');
        let [num2, unit2] = value2.split(' ');

        if (unit1 === "NOS" && unit1 === unit2) {
            return `${num1 - num2} NOS`
        }

        if (unit1 === "NOS" && unit2 !== "NOS") {
            if (["KG", "GRAM"].includes(unit2)) {
                unit1 = "KG"
            }
        }

        if (unit2 === "NOS" && unit1 !== "NOS") {
            // if (["KG", "GRAM"].includes(unit2)) {
            //     unit1 = "KG"
            // }

            // if(

            // )
        }

        // Convert values to a common unit, let's say grams
        const unitConversion = {
            'KG': 1000, // 1 kg = 1000 grams
            'GRAM': 1,
        };

        // Ensure units are in uppercase for comparison
        const normalizedUnit1 = unit1.toUpperCase();
        const normalizedUnit2 = unit2.toUpperCase();

        // Check if units are valid
        if (!(normalizedUnit1 in unitConversion) || !(normalizedUnit2 in unitConversion)) {
            return '0 GRAM';
        }
        // Calculate the result in grams
        const resultInGrams = (parseFloat(num1) * unitConversion[normalizedUnit1]) - (parseFloat(num2) * unitConversion[normalizedUnit2]);

        // Convert the result back to the unit of the first argument
        const resultUnit = unit1;
        const resultValue = resultInGrams / unitConversion[normalizedUnit1];

        return `${resultValue} ${resultUnit}`;
    }

    function addValues(value1, value2) {

        console.table({
            value1,
            value2
        })
        // Extract numeric values and units
        const [num1, unit1] = value1.split(' ');
        const [num2, unit2] = value2.split(' ');

        // Convert values to a common unit, let's say grams
        const unitConversion = {
            'KG': 1000, // 1 kg = 1000 grams
            'GRAM': 1,
        };

        // Ensure units are in uppercase for comparison
        const normalizedUnit1 = unit1.toUpperCase();
        const normalizedUnit2 = unit2.toUpperCase();

        // Check if units are valid
        if (!(normalizedUnit1 in unitConversion) || !(normalizedUnit2 in unitConversion)) {
            return 'Invalid units';
        }

        // Calculate the result in grams
        const resultInGrams = (parseFloat(num1) * unitConversion[normalizedUnit1]) + (parseFloat(num2) * unitConversion[normalizedUnit2]);

        // Determine the higher unit for the result
        let resultValue;
        let resultUnit;

        if (resultInGrams >= 1000) {
            resultValue = resultInGrams / 1000;
            resultUnit = 'KG';
        } else {
            resultValue = resultInGrams;
            resultUnit = 'GRAM';
        }

        return `${resultValue} ${resultUnit}`;
    }

    function getRemainingStock(data) {
        if (data?.length) {
            const status = data?.reduce((v, item) => {
                console.log(v);
                return v ? addValues(subtractValues(
                    `${item?.inventoryData?.["Qty"]} ${item?.inventoryData?.["UOM"]}`,
                    `${(item["Conversion Qty"] * quantity).toFixed(2)} ${item["Conversion Type"]}`
                ), v) : subtractValues(
                    `${item?.inventoryData?.["Qty"]} ${item?.inventoryData?.["UOM"]}`,
                    `${(item["Conversion Qty"] * quantity).toFixed(2)} ${item["Conversion Type"]}`
                )
            }, null)

            console.log('status  ', status)
            return status
        }
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
                                <td>{item?.ingredientName}</td>
                                <td>{item?.measurement}</td>
                                <td>{item?.quantity}</td>
                                <td>{item?.requiredStock}</td>
                                <td>{item?.currentStock}</td>
                                <td>{item?.remainingStock}</td>
                            </tr>)
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Grand Total</th>
                            <th>--</th>
                            <th>{rawMaterial?.length * quantity}</th>
                            <th>--</th>
                            <th>{requiredMaterials?.reduce((v, item) => +item?.inventoryData?.["Qty"] + v, 0)} {requiredMaterials?.[0]?.inventoryData?.["UOM"]}</th>
                            {/* <th>{requiredMaterials?.reduce((v, item) => +item?.inventoryData?.["Qty"] + v, 0)} {requiredMaterials?.[0]?.inventoryData?.["UOM"]}</th> */}
                            <th>{getRemainingStock(requiredMaterials)}</th>
                        </tr>
                    </tfoot>
                </Table>
            </div>
        </div>
    )
}
