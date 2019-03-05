/**
 * 仪表盘
 */
import * as d3 from 'd3'

export default class Dashboard {
    constructor(config = { id, height: 100, width: 100, dataset: [] }) {
        this.name = 'Dashboard'
        this.id = config.id
        this.width = config.width
        this.height = config.height
        this.dataset = config.dataset
    }

    initialize() {
        console.log('   start initialize Dashboard.')
        this.indexDial()
    }
    destroy() {
        console.log('   destory initialize Dashboard.')
    }
    /**
     * 绘制表盘
     */
    indexDial() {
        d3.select('#' + this.id)
            .attr("class", "bar").text('test')
            .data(this.dataset).append("div")
            .attr("class", "bar")
            .style("height", function (d) {
                let barHeight = d * 5;
                return barHeight + "px";
            });
    }
}