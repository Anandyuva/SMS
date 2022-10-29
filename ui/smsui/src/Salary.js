import React from "react";
import * as d3 from 'd3';

const RunPie=()=>{
    var salary=Number.parseInt(document.getElementById("salary").value);
    var data = [salary];
        let path=document.getElementById("pieTry");
		var svg = d3.select(path),
			width = 250,
			height = 250,
			radius = Math.min(width, height) / 2,
			g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        svg.style("width",width.toString())
        svg.style("height",height.toString())

		var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

		// Generate the pie
		var pie = d3.pie();

		// Generate the arcs
		var arc = d3.arc()
					.innerRadius(100)
					.outerRadius(radius);

		//Generate groups
		var arcs = g.selectAll("arc")
					.data(pie(data))
					.enter()
					.append("g")
					.attr("class", "arc")

		//Draw arc paths
		arcs.append("path")
			.attr("fill", function(d, i) {
				return color(i);
			})
			.attr("d", arc);
        arcs.append("text")
            .attr("transform","translate(-"+(width/2-80)+",0)")
            .text((d)=>{return salary.toString()})
        arcs.style("font-size","2rem");
        

}
const Salary=()=>{
    return (
        <>
            <h1>This is Salary page</h1>
            <div className="row">
                <div className="col-6">
                    <div className="container p-4">
                        <div class="form-group">
                            <label for="">Enter Your Salary</label>
                            <input type="number"
                                class="form-control w-50" name="" id="salary" aria-describedby="helpId" placeholder="" />
                            
                        </div>
                        <button onClick={RunPie} class="btn btn-primary" style={{margin:"1rem 0"}}>Submit</button>
                    </div>
                </div>
                <div className="col-6">
                    <svg id="pieTry">Working</svg>
                </div>
            </div>
        </>
    );
}
export default Salary;