import * as React from 'react';
import Link from 'gatsby-link';
import '@/static/index.less';

export default function NotFound({ location }) {
  return (
    <div id="page-404">
      <section>
        <h1>404</h1>
        <p>
          你要找的页面不存在
          <Link to="/">
            返回首页
          </Link>
        </p>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: '#react-content { height: 100%; background-color: #fff }',
        }}
      />
    </div>
  );
}
