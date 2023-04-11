import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createSwaggerSpec } from 'next-swagger-doc';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';
import { config } from '@/constants';


// @ts-ignore
const SwaggerUI = dynamic<{ spec: Record<string, any>; }>(import('swagger-ui-react'), {
  ssr: false
});

function ApiDoc ({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    apiFolder: 'src/pages/api',
    schemaFolders: ['src/models'],
    definition: {
      openapi: '3.0.0',
      info: {
        title: config('NAME', 'Next Swagger API Example'),
        version: '0.0.1',
      },
    },
  });

  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;
