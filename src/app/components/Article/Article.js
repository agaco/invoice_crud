import React from 'react';
import * as PropTypes from 'prop-types';
import { Col } from 'antd';
import { Card, Image, Title } from './styled';

const placeholder = 'https://via.placeholder.com/300';

const Article = ({
  title,
  img,
}) => {
  return (
    <Col span={8} style={{margin: '10px'}}>
      <Card hoverable
        cover={
          <Image alt={img ? img.title : ''}
            src={img ? img.url : placeholder}
          />
        }
      >
        <Title>
          {title}
        </Title>
      </Card>
    </Col>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  img: PropTypes.object,
};


export default Article;