import "./review.scss"

export default function Review() {

    const data = [
        {
            id: 1,
            name: "Abhishek RA",
            title: "Student at VIT",
            img:
              "assets/abhishek.jpeg",
            icon: "assets/twitter.png",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
          },
          {
            id: 2,
            name: "Damian Lourdes",
            title: "Student at VIT",
            img:
              "assets/damian.jpeg",
            icon: "assets/youtube.png",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
            featured: true,
          },
          {
            id: 3,
            name: "Priyadarshini Pradeep",
            title: "Student at VIT",
            img:
              "assets/priya.jpeg",
            icon: "assets/linkedin.png",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
          },
    ]

    return (
        <div className="review" id = "review">
            <h1>Reviews</h1>
            <div className="container">
                {data.map(d=>(

                
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img className="user" src={d.img} alt="" />
                        <img className="right" src={d.icon} alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
