import {screen, render} from '@testing-library/react';
import RepositoriesListItem from './RepositoriesListItem';
import {MemoryRouter} from "react-router";

jest.mock('../tree/FileIcon', () => {
    return () => {
        return 'FileIcon Component';
    }
});

function renderComponent() {
    const repository = {
        full_name: 'owner/repo-name',
        language: 'JavaScript',
        description: 'A sample repository for testing',
        owner: 'owner',
        name: 'repo-name',
        html_url: 'https://github.com/repo-name'
    };
    return render(
        <MemoryRouter>
            <RepositoriesListItem repository={repository}/>
        </MemoryRouter>);
}

test('shows a link to the github homepage for this repository', async () => {
    renderComponent();

    // await screen.findByRole('img', {name: 'JavaScript'}); - only used if FileIcon component was not mocked
})

const pause = () => {
    return new Promise(resolve => setTimeout(() => {
        resolve();
    }, 100));
}
