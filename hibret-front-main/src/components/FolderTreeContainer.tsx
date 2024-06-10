import { useEffect, useState } from 'react';
import { fetchFolderHierarchy } from '../services/api/folderApi';
import FolderTree from './FolderTree';

const FolderTreeContainer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchFolderHierarchy();
      if (!response.isError) {
        setData(response.data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);



  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen ">
        <div className="rounded-full h-20 w-20 bg-teal-400 animate-ping"></div>
      </div>
    );
  }

  if (!data) {
    return <div className="flex items-center justify-center h-screen">No Repository available</div>;
  }

  return <FolderTree data={data} />;
};

export default FolderTreeContainer;
