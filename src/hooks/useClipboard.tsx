import toast from 'react-hot-toast'
import copy from 'copy-to-clipboard'

const useClipboard = () => {
  const _copy = async (data: string) => {
    try {
      copy(data, {
        format: 'text/plain',
        onCopy: () => {
          toast.success("Copiado")
        },
      })
    } catch (err) {
      toast.error('No se permite copiar')
    }
    
  }
  return { copy: _copy }
}

export default useClipboard
