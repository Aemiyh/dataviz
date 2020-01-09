// set the dimensions and margins of the graph
var width = 450
    height = 450
    margin = 40

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data = {"facebook":5317.996,"whatsapp":520.5242,"snapchat":50.2,"instagram":1888.43,"youtube":2137.7223,"messenger":694.0152,"spotify":200.37,"gmail":90.5927,"appli_shopping":1881.1793,"navigation":1807.357,"appli_banque":9.2155,"transport":167.57,"meteo":75.4677,"logement":0,	"jeux":349.4016,"Linkedln":157.1369}
console.log(data)
// set the color scale

    // List of groups (here I have one group per column)
  var color = d3.scaleOrdinal()
  .domain(data)
  .range(["#4860e6","#2aabee","#2ee5ae","#6afd6a","#c0ee3d","#feb927","#fe6e1a","#c2270a","#900c00","#6e40aa","#c83dac","#ff5375","#ff8c38","#c9d33a","#79f659","#28ea8d","#1eb8d0","#4775de","#6e40aa"])

// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) {return d.value; })
var data_ready = pie(d3.entries(data))
console.log(data_ready)
// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('whatever')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(100)         // This is the size of the donut hole
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)