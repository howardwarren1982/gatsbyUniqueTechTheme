import React from "react"
import * as style from "./packages.module.scss"

import leftarrow from "../../images/arrowLeft/arrowLeft.png"

export default function Packagessection() {
  return (
    <section className={style.ourpackages}>
      <div className="myrow center">
        <span className={style.arrowspan}>
          <img className={style.leftarrow} src={leftarrow} alt="" />
        </span>
        <h3 className={style.ourpackages}>OUR PACKAGES</h3>
      </div>
      <div className="myrow center tablesetup">
        <table className={style.paydata}>
          <tr>
            <th className={style.basic}>Basic</th>
            <th className={style.standard}>Standard</th>
            <th className={style.premium}>Premium</th>
          </tr>
          <tr>
            <td>5 web sites</td>
            <td>15 web sites</td>
            <td>30 web sites</td>
          </tr>
          <tr>
            <td>15 e-mails</td>
            <td>40 e-mails</td>
            <td>50 e-mails</td>
          </tr>
          <tr>
            <td>5 MySQL databases</td>
            <td>20 MySQL databases</td>
            <td>40 MySQL databases</td>
          </tr>
          <tr>
            <td>10 GB storage</td>
            <td>50 GB storage</td>
            <td>100 GB storage</td>
          </tr>
          <tr>
            <td className={style.tablebottem}>$5/mo.</td>
            <td className={style.tablebottem}>$12/mo.</td>
            <td className={style.tablebottem}>$19/mo.</td>
          </tr>
          <tr>
            <th>
              <button className={style.basicorder} type="button" name="button">
                ORDER NOW
              </button>
            </th>
            <th>
              <button
                className={style.standardorder}
                type="button"
                name="button"
              >
                ORDER NOW
              </button>
            </th>
            <th>
              <button
                className={style.premiumorder}
                type="button"
                name="button"
              >
                ORDER NOW
              </button>
            </th>
          </tr>
        </table>

        <div className={style.resposivetable}>
          <ul className={style.responsivetabletemplete}>
            <li className={style.basic}>Basic</li>
            <li>5 web sites</li>
            <li>15 e-mails</li>
            <li>5 MySQL databases</li>
            <li>10 GB storage</li>
            <li className={style.tablebottem}>$5/mo.</li>
            <li>
              <button className={style.basicorder} type="button" name="button">
                ORDER NOW
              </button>
            </li>
          </ul>
          <ul className={style.responsivetabletemplete}>
            <li className={style.standard}>Standard</li>
            <li>15 web sites</li>
            <li>40 e-mails</li>
            <li>20 MySQL databases</li>
            <li>50 GB storage</li>
            <li className={style.tablebottem}>$12/mo.</li>
            <li>
              <button
                className={style.standardorder}
                type="button"
                name="button"
              >
                ORDER NOW
              </button>
            </li>
          </ul>
          <ul className={style.responsivetabletemplete}>
            <li className={style.premium}>premium</li>
            <li>30 web sites</li>
            <li>50 e-mails</li>
            <li>40 MySQL databases</li>
            <li>100 GB storage</li>
            <li className={style.tablebottem}>$19/mo.</li>
            <li>
              <button
                className={style.premiumorder}
                type="button"
                name="button"
              >
                ORDER NOW
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
