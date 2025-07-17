const withExtraProps = (WrappedComponent) => {
  return (props) => <WrappedComponent {...props} extraProp="value" />;
};

const EnhancedComponent = withExtraProps(MyComponent);
