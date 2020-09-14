import {createElement, Component, render} from "./toy-react"

class MyComponent extends Component{
    render() {
        // 标签被翻译成toy-react中的createElement，最外层是div的ElementWrapper，MyComponent的get root()拿到的就是它的root
        return <div>
            <h1>my component</h1>
            {this.children}
        </div>
    }
}


render(<MyComponent id="a" class="c">
    <div>abc</div>
    <div></div>
    <div></div>
</MyComponent>, document.body);