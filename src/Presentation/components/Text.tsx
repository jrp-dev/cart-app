import {buttonTypes} from '../../types/buttonTypes'

export default function Text(data: {data: string}) {
    return (
        <span>{data.data}</span>
    )
}