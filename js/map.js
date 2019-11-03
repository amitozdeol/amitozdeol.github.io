getdata();
async function getdata() {
  const response = await fetch('https://jonsvillagetaxi.com/test.json', {
  });
  const myJson = await response.json();
  console.log(myJson);

}

//Width and height
var w = 800;
var h = 600;

//Define map projectionb


var projection = d3.geo.albersUsa() // use a standard projection to flatten the poles, see D3 projection plugin
  .translate([w / 2, h / 2]) // centrer the resulting image in svg
  .scale([w]); // zoom, the smaller the value the bigger the zoom

//Define path generator
var path = d3.geo.path()
  .projection(projection);


//Create SVG
var svg = d3.select("#container")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

var tooltip = d3.select("body")
  .append("div")
  .style("position", "absolute")
  .style("z-index", "10")
  .style("visibility", "hidden")
  .text("");

//Load in GeoJSON data - https://geojson-maps.ash.ms/
d3.json("assets/usa.geo.json", function (json) {

  //Bind data and create one path per GeoJSON feature
  svg.selectAll("path")
    .data(json.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "rgba(8, 81, 156, 0.2)")
    .attr("fill", "rgba(8, 81, 156, 0.6)")
    .on("mouseover", function (d) { return tooltip.style("visibility", "visible").text(d.properties.name); })
    .on("mousemove", function () { return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px"); })
    .on("mouseout", function () { return tooltip.style("visibility", "hidden"); });

});
