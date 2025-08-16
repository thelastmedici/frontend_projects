# NotesApp 📝

A modern, responsive note-taking application built with React and Tailwind CSS. Create, edit, organize, and search through your notes with an intuitive and clean interface.

![NotesApp Screenshot](https://via.placeholder.com/800x500/e0f2fe/1e40af?text=NotesApp+Interface)

## ✨ Features

### Core Functionality
- **Create Notes**: Add new notes instantly with a clean editor
- **Edit Notes**: Switch between view and edit modes seamlessly
- **Delete Notes**: Remove unwanted notes with confirmation
- **Auto-save**: Changes are saved automatically when you finish editing

### Organization & Search
- **Real-time Search**: Find notes by title, content, or tags
- **Tag System**: Organize notes with custom tags
- **Date Tracking**: Automatic creation date for each note
- **Visual Previews**: See note content at a glance in the sidebar

### User Experience
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Collapsible Sidebar**: Maximize writing space when needed
- **Clean Interface**: Distraction-free writing environment
- **Smooth Animations**: Polished interactions throughout the app

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thelastmedici/notes-app.git
   cd notes-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the app in action.

## 🛠️ Tech Stack

- **Frontend**: React 18 with Hooks
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React useState and useEffect
- **Build Tool**: Create React App

## 📱 Usage

### Creating a Note
1. Click the "New Note" button in the sidebar
2. A new untitled note will be created and opened in edit mode
3. Add your title, content, and tags
4. Click "Save" to finish

### Editing a Note
1. Select any note from the sidebar
2. Click the "Edit" button in the header
3. Make your changes
4. Click "Save" to apply changes

### Organizing with Tags
- Add tags in edit mode using comma-separated values
- Tags appear as colored badges below note content
- Use tags to categorize and filter your notes

### Searching Notes
- Use the search bar in the sidebar
- Search works across note titles, content, and tags
- Results update in real-time as you type

## 🏗️ Project Structure

```


## 🎨 Customization

### Styling
The app uses Tailwind CSS for styling. Key design elements:
- **Colors**: Blue primary, gray neutrals, semantic colors for actions
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent padding and margins throughout
- **Animations**: Smooth transitions for better UX

### Extending Features
The app is built with extensibility in mind. Easy additions include:
- **Export/Import**: JSON or Markdown export functionality
- **Rich Text**: Add formatting options to the editor
- **Categories**: Expand beyond tags to full category support
- **Themes**: Dark mode and custom color schemes
- **Cloud Sync**: Integration with cloud storage services

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling
- [React](https://reactjs.org/) for the component framework

## 🐛 Known Issues

- Data is stored in browser memory only (resets on page refresh)
- No real-time collaboration features
- Limited rich text formatting options

## 🔮 Future Enhancements

- [ ] Local storage persistence
- [ ] Rich text editor integration
- [ ] Note templates
- [ ] Export to PDF/Markdown
- [ ] Dark mode theme
- [ ] Keyboard shortcuts
- [ ] Note sharing capabilities
- [ ] Cloud synchronization
- [ ] Mobile app version

---

**Made with ❤️ and lots of ☕**

For questions or support, please open an issue on GitHub.