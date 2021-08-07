import './grid.scss'
import Line from '../line/line'
const Grid = (props) => {

    const { array } = props

    return (
        <div className='grid'>
            {array.map((e, i) => 
                <Line line={e} key={i} ></Line>
            )}
        </div>
    )

}

export default Grid