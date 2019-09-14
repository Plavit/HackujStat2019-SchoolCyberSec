import React, {Component} from "react"
import ReactDOM from "react-dom"
import withRedux from "next-redux-wrapper"
import Button from '@material-ui/core/Button';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from "react-simple-maps"
import {scaleLinear} from "d3-scale"
import ReactTooltip from "react-tooltip"

const wrapperStyles = {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
    fontFamily: "Roboto, sans-serif",
    textAlign: "left",

}
const okresScale = scaleLinear()
    .domain([0.3, 0.5, 0.7])
    .range(["#BD3B1B", "#D8A800", "#006344"])

class SchoolCyberSafetyMap extends Component {
    componentDidMount() {
        setTimeout(() => {
            ReactTooltip.rebuild()
        }, 100)
    }

    constructor() {
        super()

        this.state = {
            zoom: 56,
        }

        this.handleZoomIn = this.handleZoomIn.bind(this)
        this.handleZoomOut = this.handleZoomOut.bind(this)
    }

    handleZoomIn() {
        this.setState({
            zoom: this.state.zoom * 2,
        })
    }

    handleZoomOut() {
        this.setState({
            zoom: this.state.zoom / 2,
        })
    }

    handleMoveStart(currentCenter) {
        console.log("New center: ", currentCenter)
    }

    handleMoveEnd(newCenter) {
        console.log("New center: ", newCenter)
    }


    render() {
        return (
            <div style={wrapperStyles}>
                <button onClick={this.handleZoomIn} color="primary">{"Zoom in"}</button>
                <button onClick={this.handleZoomOut} color="primary">{"Zoom out"}</button>
                {/*<Button>tst</Button>*/}
                <hr/>
                <ComposableMap
                    projectionConfig={{
                        scale: 205,
                        rotation: [-11, 0, 0],
                    }}
                    width={980}
                    height={551}
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                >
                    <ZoomableGroup center={[15.5, 49.9]}
                                   zoom={this.state.zoom}
                                   onMoveStart={this.handleMoveStart}
                                   onMoveEnd={this.handleMoveEnd}
                    >
                        <Geographies geography="/static/okresy.json">
                            {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                                <Geography
                                    key={i}
                                    data-tip={"Okres: " + geography.properties.NAZ_LAU1
                                    + "<br />Kraj: " + geography.properties.NAZ_CZNUTS3
                                    // + "<br />KOD: " + geography.properties.KOD_OKRES
                                    + "<br />Celkem škol: " + geography.properties.STAT_KRAJ_SKOLY
                                    + "<br />Šifruje: " + geography.properties.STAT_KRAJ_SIFRUJI
                                    + "<br />Poměr šifrujících: " + geography.properties.STAT_KRAJ_POMER
                                        }
                                    geography={geography}
                                    projection={projection}
                                    style={{
                                        default: {
                                            fill: okresScale(geography.properties.STAT_KRAJ_SIFRUJI/geography.properties.STAT_KRAJ_SKOLY),
                                            stroke: "#CCC",
                                            strokeWidth: 0.03,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            outline: "none",

                                        },
                                        hover: {
                                            fill: "#607DFF",
                                            stroke: "#DDDDDD",
                                            strokeWidth: 0.03,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            outline: "none",

                                        },
                                        pressed: {
                                            fill: "#0057ff",
                                            stroke: "#FFFFFF",
                                            strokeWidth: 0.03,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            outline: "none",

                                        },
                                    }}
                                />
                            ))}
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
                <ReactTooltip multiline={true} place={'left'}/>
            </div>


        )
    }
}

export default React.forwardRef((props, ref) => <SchoolCyberSafetyMap {...props} innerRef={ref} />);
// export default SchoolCyberSafetyMap
