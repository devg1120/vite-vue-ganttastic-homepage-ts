import { GanttBarObject, GGanttChartPropsRefs } from "./../models/models"
import dayjs from "dayjs"
import { computed } from "vue"

export default function useBarDrag (
  gGanttChartPropsRefs: GGanttChartPropsRefs
) {
  const { chartStart, chartEnd, barStart, barEnd, dateFormat } = gGanttChartPropsRefs

  const chartStartDayjs = computed(() => toDayjs(chartStart.value, "start"))
  const chartEndDayjs = computed(() => toDayjs(chartEnd.value, "end"))

  const toDayjs = (value: string | GanttBarObject, startOrEnd?: "start" | "end") => {
  //const toDayjs = (value: string | GanttBarObject, startOrEnd: "start" | "end") => {
    if (typeof value === "string") {
      return dayjs(value, dateFormat.value, true)
    }
    if (startOrEnd == null) {
      throw Error("VueGanttastic - toDayjs: passed a GanttBarObject as value, but did not provide start|end parameter.")
    }
    console.log("value", value)
    console.log(barStart.value)
    console.log(barEnd.value)
    const property = startOrEnd === "start" ? value[barStart.value] : value[barEnd.value]
    return dayjs(property, dateFormat.value, true)
  }

  return {
    chartStartDayjs,
    chartEndDayjs,
    toDayjs
  }
}
