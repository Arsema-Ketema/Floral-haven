import React, { useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, FormHelperText, Paper, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';

const ProductForm = ({ addProduct }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [image, setImage] = useState(null);

  const categories = ['Bouquets', 'Wedding Flowers', 'Birthday Specials', 'Seasonal Flowers'];

  const onSubmit = (data) => {
    const newProduct = { ...data, image };
    addProduct(newProduct);
    setImage(null);
  };

  return (
    <Paper 
      elevation={6} 
      sx={{ 
        p: 4, 
        bgcolor: '#1F4D3B',  // Dark green background to match the theme
        borderRadius: 3, 
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.4)',  // Darker shadow effect
        color: '#fff',  // White text for readability
        mt: 3
      }}
    >
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 3, 
          fontWeight: 'bold', 
          textAlign: 'center', 
          color: '#FFB74D'  // Gold for the header
        }}
      >
        Add a New Product
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product Name Field */}
        <TextField
          label="Product Name"
          variant="outlined"
          fullWidth
          sx={{ 
            mb: 2, 
            bgcolor: '#333',  // Dark background for input fields
            input: { color: '#fff' },  // White text in input fields
            '& .MuiOutlinedInput-root': { 
              '& fieldset': { borderColor: '#FFB74D' },  // Gold border
              '&:hover fieldset': { borderColor: '#FFB74D' } // Hover effect with gold
            },
            '& .MuiInputLabel-root': { color: '#FFB74D' }  // Gold label for input fields
          }}
          {...register('name', { required: 'Product name is required' })}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ''}
        />

        {/* Description Field */}
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          sx={{ 
            mb: 2, 
            bgcolor: '#333', 
            textarea: { color: '#fff' }, 
            '& .MuiOutlinedInput-root': { 
              '& fieldset': { borderColor: '#FFB74D' },  
              '&:hover fieldset': { borderColor: '#FFB74D' } 
            },
            '& .MuiInputLabel-root': { color: '#FFB74D' }  
          }}
          {...register('description', { required: 'Description is required' })}
          error={!!errors.description}
          helperText={errors.description ? errors.description.message : ''}
        />

        {/* Price Field */}
        <TextField
          label="Price"
          type="number"
          variant="outlined"
          fullWidth
          sx={{ 
            mb: 2, 
            bgcolor: '#333', 
            input: { color: '#fff' }, 
            '& .MuiOutlinedInput-root': { 
              '& fieldset': { borderColor: '#FFB74D' },  
              '&:hover fieldset': { borderColor: '#FFB74D' } 
            },
            '& .MuiInputLabel-root': { color: '#FFB74D' }  
          }}
          {...register('price', { 
            required: 'Price is required', 
            min: { value: 0, message: 'Price must be a positive number' } 
          })}
          error={!!errors.price}
          helperText={errors.price ? errors.price.message : ''}
        />

        {/* Category Field */}
        <FormControl fullWidth variant="outlined" error={!!errors.category} sx={{ mb: 3 }}>
          <InputLabel sx={{ color: '#FFB74D' }}>Category</InputLabel>
          <Select
            label="Category"
            sx={{ 
              bgcolor: '#333', 
              color: '#fff', 
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#FFB74D' } 
            }}
            {...register('category', { required: 'Category is required' })}
          >
            <MenuItem value="">
              <em>Select a category</em>
            </MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            ))}
          </Select>
          {errors.category && <FormHelperText sx={{ color: '#FFB74D' }}>{errors.category.message}</FormHelperText>}
        </FormControl>

        {/* Image Upload Section */}
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            component="label"
            sx={{ 
              bgcolor: '#FFB74D', 
              color: '#222', 
              fontWeight: 'bold',
              '&:hover': { bgcolor: '#D27D2C' }  // Slightly darker gold for hover
            }}
          >
            Upload Image
            <input type="file" hidden accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          </Button>
          {image && <Typography variant="body2" sx={{ mt: 1, color: '#FFB74D' }}>{image.name}</Typography>}
        </Box>

        {/* Submit Button */}
        <Button 
          type="submit" 
          variant="contained" 
          fullWidth
          sx={{ 
            bgcolor: '#FFB74D',  
            color: '#222', 
            fontWeight: 'bold',
            p: 1.5,
            '&:hover': { bgcolor: '#D27D2C' }  // Hover effect for the submit button
          }}
        >
          Add Product
        </Button>
      </form>
    </Paper>
  );
};

export default ProductForm;