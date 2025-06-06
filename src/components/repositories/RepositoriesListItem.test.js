import {screen, render} from '@testing-library/react';
import RepositoriesListItem from './RepositoriesListItem';
import {MemoryRouter} from "react-router";

// jest.mock('../tree/FileIcon', () => {
//     return () => {
//         return 'FileIcon Component';
//     }
// });
// Mocking the FileIcon component to avoid external dependencies

function renderComponent() {
    const repository = {
        full_name: 'owner/repo-name',
        language: 'JavaScript',
        description: 'A sample repository for testing',
        owner: {
            login: 'owner'
        },
        name: 'repo-name',
        html_url: 'https://github.com/repo-name'
    };

    render(
        <MemoryRouter>
            <RepositoriesListItem repository={repository}/>
        </MemoryRouter>
    );

    return {repository};
}

test('shows a link to the github homepage for this repository', async () => {
    const {repository} = renderComponent();

    await screen.findByRole('img', {name: 'JavaScript'});

    const link = screen.getByRole('link', {name: /github repository/i});
    expect(link).toHaveAttribute('href', repository.html_url);
})

test('shows a fileicon with appropriate icon', async () => {
    renderComponent();

    const icon = await screen.findByRole('img', {name: 'JavaScript'});
    expect(icon).toHaveClass('js-icon');

})

test('show a link to the code editor page', async () => {
    const {repository} = renderComponent();

    await screen.findByRole('img', {name: 'JavaScript'});

    const link = await screen.findByRole('link', {name: new RegExp(repository.owner.login)});
    expect(link).toHaveAttribute('href', `/repositories/${repository.full_name}`);

})

// const pause = () => {
//     return new Promise(resolve => setTimeout(() => {
//         resolve();
//     }, 100));
// }
// Function to pause execution for a short time (used for debugging purposes)
