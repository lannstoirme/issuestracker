const colors = [ '#f54748', '#fb9300', '#4aa96c']

export default (priority)=>{
    const level = ["High", "Medium", "Low"]
    return{
        level:(level[priority-1]),
        color:colors[priority-1]
    }
}