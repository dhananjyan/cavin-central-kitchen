import s from "./SuggestedWarehouse.module.scss";

export default function SuggestedWarehouse() {
    return (
        <div className={s.suggestedWarehouse}>
            <div style={{backgroundColor: "#CDE0F7"}}>CHN</div>
            <div style={{backgroundColor: "#A1E095"}}>MDU</div>
            <div style={{backgroundColor: "#FACE99"}}>CMB</div>
            <div style={{backgroundColor: "#F9D5D2"}}>BLR</div>
            <div style={{backgroundColor: "#F9D5D2"}}>DLR</div>
        </div>
    )
}
