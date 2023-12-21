import { useEffect, useState } from "react";
import "./productUnic.css";
import api from "../../services/api";

export function ProductUnic({id}) {

    const [product, setProduct] = useState([])

    useEffect(() => {
        async function getProducts() {
            await api.get(`/products/unic-id/${id}`).then((res) => {
                console.log(res.data[0]);
                setProduct(res.data[0]);
            }).catch((err) => {
                console.log(err);
            })
        }

        getProducts()
    },[])


    return (
        <div className="ProductUnic">
            <div className="featured">
                    <h6>DESTAQUE</h6>
            </div>
            <div className="image">
            <a href={`/oculos/${product.title}`}>
                <img src={product.featuredImage} alt="" />
                </a>
            </div>
            <div className="textInfos">
                <h4> <a href={`/oculos/${product.title}`}>{product.title}</a></h4>
                <h6>{product.sex}</h6>
            </div>
            <div className="colors">
                {product?.colors?.map((colors) => {
                    return (
                        <div className="colorUnic" id={colors.id} style={{backgroundColor:`${colors.color}`}}></div>
                    )
                })}
                </div>
            <div className="price">
                <h4><b>{product.price}</b></h4>
                <h5>-</h5>
                <h5>10x R{product.promotionalPrice}</h5>
            </div>
        </div>
    )
}