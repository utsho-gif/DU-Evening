import { FC } from 'react';
import { Helmet } from 'react-helmet';

interface PageTitleProps {
  title?: string;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
  const defaultTitle = 'Dhaka University Evening Program';
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
    </Helmet>
  );
};

PageTitle.defaultProps = {
  title: '',
};

export default PageTitle;
