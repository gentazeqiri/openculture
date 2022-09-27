import "./ebookList.css"

const EbookList = () => {
    return(
        <div className="eList">
            <div className="eListItem">
                <img src="data:image/png;base64,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" alt="" className="eListImg" />
                <div className="eListTitles">
                    <h1>It ends with us PDF</h1>
                    <h2>Colleen Hoover</h2>
                    <h3>US$19.99</h3>
                </div>
            </div>

            <div className="eListItem">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/53123e79439115.5cc2d81b04ce1.jpg" alt="" className="eListImg" />
                <div className="eListTitles">
                    <h1>Dune PDF</h1>
                    <h2>Frank Herbert</h2>
                    <h3>US$10.99</h3>
                </div>
            </div>

            <div className="eListItem">
                <img src="https://target.scene7.com/is/image/Target/GUEST_88f27f1b-d5f1-4300-8eae-7c2bd2b62bba" alt="" className="eListImg" />
                <div className="eListTitles">
                    <h1>The Last Thing He Told Me PDF</h1>
                    <h2>Laura Dave</h2>
                    <h3>US$7.99</h3>
                </div>
            </div>

            <div className="eListItem">
                <img src="https://sdi1.chrislands.com/sdi/978/05/53/3/9780553381689.jpg" alt="" className="eListImg" />
                <div className="eListTitles">
                    <h1>Game of Thrones PDF</h1>
                    <h2>George R. R. Martin</h2>
                    <h3>US$150</h3>
                </div>
            </div>

            <div className="eListItem">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71TtZ46uQ3L.jpg" alt="" className="eListImg" />
                <div className="eListTitles">
                    <h1>Girl, Forgotten</h1>
                    <h2>Karin Slaughter</h2>
                    <h3>US$24.99</h3>
                </div>
            </div>
            




        </div>
    )
}

export default EbookList