import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "./style";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// generate  data
const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "read material ui book",
    status: 0,
  },
  {
    id: 2,
    title: "play football",
    description: "hang out with my friend",
    status: 2,
  },
  {
    id: 3,
    title: "Play Game",
    description: "solo yasuo",
    status: 1,
  },
];

class TaskBoard extends Component {
  renderBoard() {
    const { classes } = this.props;
    console.log(this.props);
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          //  lấy các task mà task.status (listtask) =  status.value(STATUSES)
          // để đưa vào taskFiltered
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value
          );

          return (
            <Grid item md={4} sm={6} xs={12} key={status.value}>
              <Box mt={3} mb={2}>
                <div className={classes.status}>{status.label}</div>
              </Box>

              <div className={classes.wrapperListTask}>
                {taskFiltered.map((task) => {
                  const { title, description } = task;
                  return (
                    <Card key={task.id}>
                      <CardContent>
                        <Grid container justify="space-between">
                          <Grid item md={8}>
                            <Typography component="h2">{title}</Typography>
                            <Typography component="h2" variant="h5">
                              {description}
                            </Typography>
                          </Grid>
                          <Grid item md={4}>
                            {status.label}
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions justify="">
                        <Button size="small">
                          Edit <Icon fontSize="small">edit</Icon>
                        </Button>
                        <Button size="small">
                          Delete <Icon fontSize="small">delete</Icon>
                        </Button>
                      </CardActions>
                    </Card>
                  );
                })}
              </div>
            </Grid>
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    // console.log(this.props);
    return (
      <div className={classes.taksboard}>
        <Button variant="contained" color="primary" className={classes.button}>
          <AddIcon /> Thêm mới công việc
        </Button>
        {this.renderBoard()}
      </div>
    );
  }
}
export default withStyles(styles)(TaskBoard);
