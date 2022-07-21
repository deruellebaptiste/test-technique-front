import DefaultLayaout from '../components/DefaultLayout'
import HomeDescription from '../components/home'
import { withStyles, Button, Container, Grid, Typography } from '@material-ui/core'
import Link from 'next/link'

const useStyles = theme => ({
    container: {marginTop: theme.spacing(5)},
    forWhat: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2)
    },
    heroButtons: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(5)
    }
});

const  Home = props => {
    const {classes} = props
    return (
        <DefaultLayaout>
            <Container maxWidth="lg" className={classes.container}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    SuperShop
                </Typography>
                <Typography variant="h6" color="textPrimary" gutterBottom className={classes.forWhat}>
                    Pourquoi Blissim ?
                </Typography>
                <HomeDescription/>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Link href="/boutique" passhref>
                                <Button variant="contained" component="a" color='primary'>
                                    Visiter la boutique
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Container>

        </DefaultLayaout>
    )
}
export default withStyles(useStyles)(Home)