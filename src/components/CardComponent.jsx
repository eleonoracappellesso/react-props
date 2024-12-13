
function CardComponent({ post }) {
    //console.log(post);
    return (
        <>
            <div className="card m-3" style={{ width: "30%" }} key={post.id}>
                <img src={post.image} className="card-img-top cardImg" alt={post.title} />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    <a href="#" className="read-btn">Leggi di più</a>
                </div>
            </div >
        </>
    )
}



export default CardComponent;