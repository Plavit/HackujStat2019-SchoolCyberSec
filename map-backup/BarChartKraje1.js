import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import {scaleLinear} from "d3-scale";

const okresScale = scaleLinear()
    .domain([0.3, 0.5, 0.7])
    .range(["#BD3B1B", "#D8A800", "#006344"])

class BarChartKraje1 extends React.Component {

    state = {
        dataBar: {
            labels: [
                'Praha',
                'Středočeský',
                'Jihočeský',
                'Plzeňský',
                'Karlovarský',
                'Ústecký',
                'Liberecký',
                'Královéhradecký',
                'Pardubický',
                'Olomoucký',
                'Moravskoslezský',
                'Jihomoravský',
                'Zlínský',
                'Vysočina'

            ],
            datasets: [
                {
                    label: "% webů středních škol využívá https na webu",
                    data: [0.4,
                        0.39,
                        0.55,
                        0.41,
                        0.3,
                        0.37,
                        0.49,
                        0.5,
                        0.5,
                        0.4,
                        0.42,
                        0.33,
                        0.45,
                        0.51,
                    ],
                    backgroundColor: [
                        okresScale(0.4),
                        okresScale(0.39),
                        okresScale(0.55),
                        okresScale(0.41),
                        okresScale(0.3),
                        okresScale(0.37),
                        okresScale(0.49),
                        okresScale(0.5),
                        okresScale(0.5),
                        okresScale(0.4),
                        okresScale(0.42),
                        okresScale(0.33),
                        okresScale(0.45),
                        okresScale(0.51),

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
                <h3 className="mt-5">.</h3>
                <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
            </MDBContainer>
        );
    }
}
export default React.forwardRef((props, ref) => <BarChartKraje1 {...props} innerRef={ref} />);