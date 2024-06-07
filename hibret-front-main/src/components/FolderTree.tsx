import { useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import DescriptionIcon from '@mui/icons-material/Description';

const FolderNode = ({ folder }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div
        className="flex items-center cursor-pointer p-2 rounded hover:bg-gray-200 transition duration-200"
        onClick={handleToggle}
      >
        {isExpanded ? (
          <FolderOpenIcon className="text-purple-900 mr-2" />
        ) : (
          <FolderIcon className="text-purple-900 mr-2" />
        )}
        <div className="text-gray-600 font-semibold">{folder.name}</div>
      </div>
      {isExpanded && (
        <div className="ml-6 border-l-2 border-gray-300 pl-4 mt-2 transition-all duration-300">
          {folder.workflows && folder.workflows.length > 0 && (
            <div className="mt-2">
              {folder.workflows.map((workflow) => (
                <div key={workflow.workflowName} className="text-gray-600 font-medium">
                  <DescriptionIcon className="text-gray-500 mr-1" />
                  Workflow: {workflow.workflowName}
                  {workflow.documentNames && workflow.documentNames.length > 0 && (
                    <ul className="ml-4 list-disc text-sm text-gray-700">
                      {workflow.documentNames.map((docName, index) => (
                        <li key={index}>
                          <DescriptionIcon className="text-gray-500 mr-1" />
                          {docName}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          {folder.children && folder.children.length > 0 && (
            <div className="mt-2">
              {folder.children.map((child) => (
                <FolderNode key={child.name} folder={child} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const FolderTree = ({ data }) => {
  return (
    <div className="mt-4">
      <FolderNode folder={data} />
    </div>
  );
};

export default FolderTree;
