import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import {scaleLinear} from "d3-scale";

const okresScale = scaleLinear()
    .domain([0.3, 0.5, 0.7])
    .range(["#BD3B1B", "#D8A800", "#006344"])

class BarChartVelikosti extends React.Component {
    state = {
        dataBar: {
            labels: [
                'Neuvedeno',
                '1 - 5 zaměstnanců',
                '6 - 9 zaměstnanců',
                '10 - 19 zaměstnanců',
                '20 - 24 zaměstnanci',
                '25 - 49 zaměstnanců',
                '50 - 99 zaměstnanců',
                '100 - 199 zaměstnanců',
                '200 - 249 zaměstnanců',
                '250 - 499 zaměstnanců',


            ],
            datasets: [
                {
                    label: "% webů středních škol využívá https na webu",
                    data: [0.4,
                        0.44,
                        0.14,
                        0.42,
                        0.33,
                        0.38,
                        0.46,
                        0.47,
                        0,
                        0.67,

                    ],
                    backgroundColor: [
                        okresScale(0.4),
                        okresScale(0.44),
                        okresScale(0.14),
                        okresScale(0.42),
                        okresScale(0.33),
                        okresScale(0.38),
                        okresScale(0.46),
                        okresScale(0.47),
                        okresScale(0),
                        okresScale(0.67),

                        // "rgba(255, 134,159,0.4)",
                        // "rgba(98,  182, 239,0.4)",
                        // "rgba(255, 218, 128,0.4)",
                        // "rgba(113, 205, 205,0.4)",
                        // "rgba(170, 128, 252,0.4)",
                        // "rgba(255, 177, 101,0.4)"
                    ],
                    borderWidth: 2,
                    borderColor: [
                        // "rgba(255, 134, 159, 1)",
                        // "rgba(98,  182, 239, 1)",
                        // "rgba(255, 218, 128, 1)",
                        // "rgba(113, 205, 205, 1)",
                        // "rgba(170, 128, 252, 1)",
                        // "rgba(255, 177, 101, 1)"
                    ]
                }
            ]
        },
        barChartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        barPercentage: 1,
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    }



    render() {
        return (
            <MDBContainer>
                <h3 className="mt-5">   .</h3>
                <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
            </MDBContainer>
        );
    }
}
export default React.forwardRef((props, ref) => <BarChartVelikosti {...props} innerRef={ref} />);