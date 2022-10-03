import {buttonTypes} from '../../types/buttonTypes'

export default function Button(data: buttonTypes) {
    return (
        <button onClick={() => data.onClickFunc(data.param)}>{data.title}</button>
    )
}