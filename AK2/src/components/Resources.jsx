import resources from '../resources.js';
import PageTitle from './PageTitle';

function Resources({ category }) {
  const filteredResources = resources.filter(resource => resource.category === category);

  return (
    <div>
      <PageTitle title={`${category.toUpperCase()} Resources`} />
      <ul>
        {filteredResources.map(resource => (
          <li key={resource.url}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;
