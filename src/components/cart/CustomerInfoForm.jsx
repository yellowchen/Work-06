import React, {useState, useEffect} from 'react';
import { useForm, useWatch } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

import Input from '../form/Input';
import Selection from '../form/Selection';
import usData from "../../assets/usData.json";
import {InputConfirmation} from "../../utils/toast-helper";
import { ageRegex, mailRegex } from 'src/utils/RegExp';

const CustomerInfoForm = () => {
	// useForm 管理表格輸入與驗證
	const {
		register,
		handleSubmit,
		control,
		watch,
		formState: {
			errors,
		},
	} = useForm({
		mode: "onSubmit",
	});

	const [addressData, setAddressData] = useState([]);

	useEffect(() => {
		const subscription = watch((value) => {
			console.log(value);
		});
		return () => subscription.unsubscribe();
	}, [watch]);

	//useWatch 監聽特定的輸入並回傳它們的值
	const watchCity = useWatch({ 
		control, 
		name: "city", 
		defaultValue: "" });

	console.log(watchCity);

	//onSubmit
	const onSubmit = (data) => {
		const user = {
			name: data.firstName +" "+ data.lastName,
			email: data.email,
			tel: data.phone,
			address: data.add,
		};

		console.log("Form Submitted", data);

		//Toast
		InputConfirmation.fire({
			title: "Please Confirm",
			html: `
				<p>Name: ${user.name}</p>
				<p>email: ${user.email}</p>
				<p>Phone: ${user.tel}</p>
				<p>Address: ${user.address}</p>
			`,
		});
	};

	//onError
	const onError = (errors) => {
		console.log("Form errors", errors);
	};

	useEffect(() => {
		setAddressData(usData);
	}, []);

	return (
		<>
			<form
				className='cart-main border-gray'
				onSubmit={handleSubmit(onSubmit, onError)}
				id='customerInfoForm'
				noValidate
			>
				<div className='cart-title'>
					<h4>Receiving Info</h4>
				</div>
				<div className='cart-content px-3 row gy-3'>
					{/* <h6>watched value: {JSON.stringify(watchForm)}</h6> */}
					<div className='col-6'>
						<Input
							register={register}
							errors={errors}
							id='firstName'
							labelText='First Name'
							placeholder='Jane'
							rules={{ required: "First Name is required" }}
						/>
					</div>
					<div className='col-6'>
						<Input
							register={register}
							errors={errors}
							id='lastName'
							labelText='Last Name'
							rules={{ required: "Last Name is required" }}
						/>
					</div>
					<div>
						<Input
							register={register}
							errors={errors}
							id='email'
							type='email'
							labelText='email'
							rules={{
								required: "Email is required",
								pattern: {
									value: mailRegex,
									message: "Invalid email format",
								},
							}}
						/>
					</div>
					<div className='col-6'>
						<Input
							register={register}
							errors={errors}
							id='age'
							labelText='Age'
							type='number'
							min='1'
							max='99'
							rules={{
								required: "Age is required",
								pattern: { value: ageRegex, message: "Invalid age" },
								valueAsNumber: true,
							}}
						/>
					</div>
					<div className='col-6'>
						<Input
							register={register}
							errors={errors}
							id='phone'
							type='tel'
							labelText='Phone'
							rules={{
								required: "Phone is required",
								pattern: { value: /\d/g, message: "number only" },
								minLength: { value: 8, message: "not too short" },
							}}
						/>
					</div>
					<div>
						<Input
							register={register}
							errors={errors}
							id='add'
							type='text'
							labelText='Address'
							rules={{ required: "Address is required" }}
						/>
					</div>
					<div className='col-6'>
						<Selection
							register={register}
							errors={errors}
							id='city'
							labelText='City'
							rules={{ required: "City is required" }}
						>
							<option value=''>*Choose City*</option>
							{Object.keys(addressData)
								.map((city) => (
								<option value={city} key={city}>
									{city}
								</option>
							))}
						</Selection>
					</div>
					<div className='col-6'>
						<Selection
							register={register}
							errors={errors}
							id='state'
							labelText='State'
							// rules={{ required: "State is required" }}
						>
							<option value=''>*Choose State*</option>
						
							{Object.entries(addressData)
								.find((item) => item[0] === watchCity)
								?.slice(1)
								.flat()
								.map(state => (
									<option value={state} key={state}>
										{state}
									</option>
								))
							}
						</Selection>
					</div>
					<div>
						<Input
							register={register}
							errors={errors}
							id='zip'
							type='text'
							labelText='Zip Code'
							rules={{ required: "Zip Code is required" }}
						/>
					</div>
				</div>
			</form>
			{/* <DevTool control={control} /> */}
		</>
	);
}

export default CustomerInfoForm