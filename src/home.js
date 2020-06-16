import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

export default function SimpleContainer() {
	const location = document.location.pathname;
  const [selected , ChangeSelect] = React.useState(location);
  const history = useHistory();
  const routeChange = (p) => {
    let path = `${p}`;
    ChangeSelect(`${p}`);
    console.log({selected});
    history.push(path);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        	<Typography
        	 variant="h3"
        	 align={'center'} 
        	 gutterBottom 
        	 style={{color:'#50579B',fontWeight:'600',fontStyle:'italic',position:'relative',top:'15%'}}>
		        Vidyalaya
		     </Typography>
		     <Button
		      onClick={() => routeChange('/login')}
		      variant="outlined"
		      style={{backgroundColor:'white',width:'250px',height:'10%',display:'block',marginBottom:'10px',color:'#50579B',fontWeight:'600',fontStyle:'italic',position:'relative',top:'20%',left:'50%',transform:'translateX(-50%)'}}
		      >
		      	Login
		      </Button>
		      <Button
		      onClick={() => routeChange('/student-video')}
		      variant="outlined"
		      style={{backgroundColor:'white',width:'250px',height:'10%',display:'block',marginBottom:'10px',color:'#50579B',fontWeight:'600',fontStyle:'italic',position:'relative',top:'20%',left:'50%',transform:'translateX(-50%)'}}
		      >
		      	Student
		      </Button>
		      <Button
		      onClick={() => routeChange('/dashboard')}
		      variant="outlined"
		      style={{backgroundColor:'white',width:'250px',height:'10%',display:'block',marginBottom:'10px',color:'#50579B',fontWeight:'600',fontStyle:'italic',position:'relative',top:'20%',left:'50%',transform:'translateX(-50%)'}}
		      >
		      	Teacher
		      </Button>
        </Typography>
      </Container>
    </React.Fragment>
  );
}