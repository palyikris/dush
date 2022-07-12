import Link from "next/link";

export default function Button(props) {

    const children = props.children;


    if(props.children === undefined){
        return(
            <Link href={props.link}>
                <a href="">{props.text}</a>
            </Link>
        )
    }

    if(children.length >= 1 || children.length === undefined) {
        return(
            <Link href={props.link}>
                <a href="">{props.children}</a>
            </Link>
        )
    }
}