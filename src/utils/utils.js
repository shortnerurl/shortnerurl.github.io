export const copyToClipboard = async (str) => {
    try {
      await navigator.clipboard.writeText(str);
      alert('Copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };