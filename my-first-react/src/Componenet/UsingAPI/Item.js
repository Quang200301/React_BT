// Lỗi --------------
const Card=(props)=>{
    return(
        <>
        <div>
            <img src={props.img}/>
            <p>{props.nameItem}</p>
            <p>{props.price}</p>
            <button type="button" onClick={()=> Aleart()}>Mua ngay</button>
        </div>
        </>
    );
};
function Aleart(){
    alert("Đã thêm vào giỏ hàng");
}
export default Card;