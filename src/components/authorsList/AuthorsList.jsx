import "./authorsList.css"

const AuthorsList = () => {
    return (
        <div className="authorList">
            <div className="authorListItem">
                <img src="https://images.gr-assets.com/authors/1464032240p8/5430144.jpg" alt="" className="authorList" />
                <div className="authorListTitles">
                    <h1>Colleen Hoover</h1>
                    <h2>“Push your boundaries, that's what they're there for.”</h2>
                </div>
            </div>

            <div className="authorListItem">
                <img src="https://i.guim.co.uk/img/media/56be7b100f9704b507dbac33715297ae2f5bd11e/0_491_4024_2414/master/4024.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67b671ed36500300ac0b275a00007f79" alt="" className="authorList" />
                <div className="authorListTitles">
                    <h1>Stephen King</h1>
                    <h2>“The scariest moment is always just before your start..”</h2>
                </div>
            </div>

            <div className="authorListItem">
                <img src="https://cdn.shopify.com/s/files/1/0253/2822/2307/articles/natalie-goldberg_480x.jpg?v=1653319630" alt="" className="authorList" />
                <div className="authorListTitles">
                    <h1>Natalie Goldberg</h1>
                    <h2>“If you read good book, when you write, good books will come out of you.”</h2>
                </div>
            </div>




        </div>
    )
}

export default AuthorsList