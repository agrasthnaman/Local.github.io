import React from 'react'
import icon1 from "../images/svg/collaborating.svg";
import icon2 from "../images/svg/delivery.svg";
import icon3 from "../images/svg/shopping.svg";
// import wave from "../images/svg/wave_fluid.svg";
import Bottom2 from "../components/svg/Bottom2.jsx"


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    ServicesContainer: {
        height: "800px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        //background: " #010606",
    },
    ServicesCard: {
        display: "flex",
        position: 'relative',
        flexDirection: "column",
        justifyContent: " flex-start",
        alignItems: " center",
        borderRadius: " 10px",
        maxHeight: "340px",
        padding: " 30px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        transition: " all 0.2 ease-in-out",
        //background: "#a2d9ff",
        // background: "#A2E3FB",
        backgroundColor: "#a2d9ff",
        backgroundImage: "linear-gradient(315deg, #00e0ff 0%,#a2d9ff 74%)",
        zIndex: 10,

        "&:hover": {
            transform: "scale(1.06)",
            transition: "all 0.2 ease-in-out",
            cursor: "pointer"
        },
    },
    ServicesIcon: {
        hight: "160px",
        width: "160px",
        marginBottom: " 10px"
    },
    ServicesWrapper: {
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center",
        gridGap: "16px",
        padding: "0 50px",
        ["@media (max-width:920px)"]: {
            flexDirection: "column",
            fontSize: "1rem",
            
          },
        
    },
    ServicesH1: {
        fontSize: "2.5rem",
        marginBottom: "64px",
        ["@media (max-width: 480px)"]:{
            fontSize: "2rem",
        }
    },
    ServicesH2: {
        fontSize: "1rem",
        marginBottom: "10px"
    },
    ServicesP: {
        fontSize: "1rem",
        textAlign: "center",
    },
    wave:{
        zIndex:-10,
        position: 'relative'
    }
}));

export default function Services() {
    const classes = useStyles();
    return (
        <>
        
        <div className={classes.ServicesContainer} id='services'>
        {/* <img className={classes.wave}src={wave} alt="" /> */}
            <h1 className={classes.ServicesH1}>Our Services</h1>
            <div className={classes.ServicesWrapper}>
                <div className={classes.ServicesCard}>
                    <img className={classes.ServicesIcon} src={icon1} alt="/" />
                    <h2 className={classes.ServicesH2}>Reduce Expenses</h2>
                    <p className={classes.ServicesP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien in leo dignissim interdum. Ut eget justo et sem egestas tempor. Morbi sollicitudin hendrerit lectus, sit amet pretium metus iaculis id.  </p>
                </div>

                <div className={classes.ServicesCard}>
                    <img className={classes.ServicesIcon} src={icon2} alt="/" />
                    <h2 className={classes.ServicesH2}>Virtual Offices</h2>
                    <p className={classes.ServicesP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien in leo dignissim interdum. Ut eget justo et sem egestas tempor. Morbi sollicitudin hendrerit lectus, sit amet pretium metus iaculis id.  </p>
                </div>

                <div className={classes.ServicesCard}>
                    <img className={classes.ServicesIcon} src={icon3} alt="/" />
                    <h2 className={classes.ServicesH2}>Premium Benefits</h2>
                    <p className={classes.ServicesP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien in leo dignissim interdum. Ut eget justo et sem egestas tempor. Morbi sollicitudin hendrerit lectus, sit amet pretium metus iaculis id.  </p>
                </div>


            </div>
            
        </div>
        <Bottom2 />
        
        </>
    );
}


