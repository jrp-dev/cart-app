import { Fragment } from "react";
import { listTypes } from "../../types/listTypes";
import Button from "./Button";
import Text from "./Text";

export default function List(data: listTypes) {
    return (
        <>
            <ul>
                {data?.data?.map((item, index) => (
                    <li key={item[data.keyProp] ? item[data.keyProp] : index }>
                        <div>
                            <p>{item[data.titleProp] ?  item[data.titleProp] : ''}</p>
                            {
                                data.rightContent?.map((content, i) => (
                                    <Fragment key={i}>
                                        {
                                            content.type === 'button' ?
                                            <Button key={i} title={content.title} onClickFunc={content.onclickFunc} param={item} /> :
                                            content.type === 'staticText' ?
                                            <span>{content.title}</span> :
                                            content.type === 'dynamicText' ?
                                            <Text data={item[content.title].toString()} /> : ''
                                        }
                                    </Fragment>
                                ))
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}