import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SchoolCyberSafetyMap from '../map-backup/SchoolCyberSafetyMap';
import BarChartKraje1 from '../map-backup/BarChartKraje1';
import BarChartVelikosti from '../map-backup/BarChartVelikosti';
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";




export default function Index() {

    return (
        <Container>
            <Box my={1}>
                <Typography variant="h4" component="h1" gutterBottom >
                    School Web Security Analysis
                </Typography>
                <picture></picture>


            </Box>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className=''>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Přehled - kraje
                        </Typography>
                        <SchoolCyberSafetyMap/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className=''>
                        <Typography variant="h4" component="h4" gutterBottom>
                            Kraje
                        </Typography>

                        <BarChartKraje1/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className=''>
                        <Typography variant="h4" component="h4" gutterBottom>
                            Velikosti organizací
                        </Typography>

                        <BarChartVelikosti/>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );

}