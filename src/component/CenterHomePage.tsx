import React from 'react'

type Props = {}

const CenterHomePage = (props: Props) => {
    return (
        <div>
            <div className="col-12 flex d-flex my-5 ">
                <div className="col-4 me-3 py-3">
                    <p>Though her persona continues to evolve to her devoted fans, shes simply Kim, a surreal yet relatable
                        public figure who is infinitely watchable. Only one celebrity could shut down Paris Fashion Week by
                        taking a seat in Balenciagas front row wearing head-to-toe caution tape, then study for their
                        latest legal exams during the plane ride home.</p>
                </div>
                <div className="col-8 ">
                    <img src="http://127.0.0.1:5500/img/bannerCenter.png" className="w-100"/>
                </div>
            </div>
            <div className="category flex d-flex col-12 text-center my-3">
                <h5 className="mx-3 ">For Him</h5>
                <h5 className="mx-3 ">For her</h5>
            </div>
            <div className="topSale col-12 flex d-flex py-5">
                <div className="col-4 px-3">
                    <img src="https://cdn.ssstutter.com/products/system/102021/1634091675001.jpeg" className="w-100" />
                </div>
                <div className="col-4 px-3">
                    <img src="https://cdn.ssstutter.com/products/nCRHI1bpbr1ZIsxG/032022/1647488272228.jpeg" className="w-100" height="339px"/>
                </div>
                <div className="col-4 px-3">
                    <img src="https://cdn.ssstutter.com/products/nCRHI1bpbr1ZIsxG/032022/1647487571838.jpeg" className="w-100" height="339px" />
                </div>
            </div>
        </div>

    )
}

export default CenterHomePage