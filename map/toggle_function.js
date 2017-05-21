

export default class toggle_functions extends Component{
    toggleStatus_Food() {
    if(food.length == 0){food = markers.food;}
    else{food = [];}
    marker = gov.concat(food,parking,gov,art,parks,retail,history);
    this.setState({ marker: this.marker })
  };
  toggleStatus_Gov() {
    if(gov.length == 0){gov = markers.gov;}
    else{gov = [];}
    //var nums = num1.concat(num2, num3);
    marker = gov.concat(food,parking,gov,art,parks,retail,history);
    this.setState({ marker: this.marker })
  };
  toggleStatus_Parking() {
    if(parking.length == 0){parking = markers.parking;}
    else{parking = [];}
    marker = gov.concat(food,parking,gov,art,parks,retail,history);
    this.setState({ marker: this.marker })
  };
  toggleStatus_Art() {
    if(art.length == 0){art = markers.art;}
    else{art = [];}
    marker = gov.concat(food,parking,gov,art,parks,retail,history);
    this.setState({ marker: this.marker })
  };
  toggleStatus_Parks() {
    if(parks.length == 0){parks = markers.parks;}
    else{parks = [];}
    marker = gov.concat(food,parking,gov,art,parks,retail,history);
    this.setState({ marker: this.marker })
  };
  toggleStatus_Retail() {
    if(retail.length == 0){retail = markers.retail;}
    else{retail = [];}
    marker = gov.concat(food,parking,gov,art,parks,retail,history);
    this.setState({ marker: this.marker })
  };
  toggleStatus_History() {
    if(history.length == 0){history = markers.history;}
    else{history = [];}
    marker = gov.concat(food,parking,gov,art,parks,retail,history);
    this.setState({ marker: this.marker })
  };
  
};