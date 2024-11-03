interface Props {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Props> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const page = new Page({ title: 'My Page' });
page.pageInfo();

export {};
