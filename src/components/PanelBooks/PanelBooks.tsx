/* eslint-disable @next/next/no-img-element */

import "./style.css"




export default function PanelBook () {
    return (
      <div className="Painel_Books">
          <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                      <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div>
              </div>
          </div>
      </div>
    )
}