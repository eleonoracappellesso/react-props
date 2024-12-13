import posts from "../data/post";
import CardComponent from "./CardComponent"

function MainComponent() {
    return (
        <main className="container d-flex justify-content-center flex-wrap align-items-center">
            {posts.map((post) => (
                <CardComponent key={post.id} post={post} />
            ))}
        </main>)
}

export default MainComponent;