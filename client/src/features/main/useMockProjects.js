import { useState, useEffect } from 'react';
import { mockProjects } from '../../services/mockProjects';

export default function useMockProjects() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a network request with a timeout
        setTimeout(() => {
            setProjects(mockProjects);
            setIsLoading(false);
        }, 1000); // 1 second delay for simulation
    }, []);

    return { projects, isLoading };
}
