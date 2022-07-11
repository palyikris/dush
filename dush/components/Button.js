import Link from "next/link";

export default function Button(props) {

    const children = props.children;

    console.log(children.length >= 1)

    if(children.length >= 1 || children.length === undefined) {
        return(
            <Link href={props.link}>
                <a href="">{props.children}</a>
            </Link>
        )
    }
    else{
        return(
            <Link href={props.link}>
                <a href="">{props.text}</a>
            </Link>
        )
    }
}