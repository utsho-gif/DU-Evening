interface ILoadingProps {
  text?: string;
}

function Loading({ text }: ILoadingProps) {
  return (
    <div className="main-loading">
      <i className="fa fa-spinner fa-spin" /> {text}
    </div>
  );
}

export default Loading;

Loading.defaultProps = {
  text: 'Loading...',
};
