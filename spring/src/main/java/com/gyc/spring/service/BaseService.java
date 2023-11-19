package com.gyc.spring.service;

import java.util.List;

import com.gyc.spring.exception.SystemNotFound;
import com.gyc.spring.mapper.config.EntityMapper;
import com.gyc.spring.model.BaseEntity;
import com.gyc.spring.repository.BaseRepository;

import jakarta.transaction.Transactional;


public abstract class BaseService<T extends BaseEntity, DTO> {
	
	protected final BaseRepository<T> repository;

	protected final EntityMapper<DTO, T> mapper;

	public BaseService(BaseRepository<T> repository, EntityMapper<DTO, T> mapper) {
		this.repository = repository;
		this.mapper = mapper;
	}

	@Transactional
	public DTO save(DTO dto) {
		return mapper.toDto(repository.save(mapper.toEntity(dto)));
	}

	@Transactional
	public List<DTO> saveAll(List<DTO> listDTO) {
		return mapper.toDto(repository.saveAll(mapper.toEntity(listDTO)));
	}

	@Transactional
	public DTO update(DTO dto) {
		return mapper.toDto(repository.saveAndFlush(mapper.toEntity(dto)));
	}

	public void delete(Long id) {
		repository.deleteById(id);
	}

	public List<DTO> findAll() {
		return mapper.toDto(repository.findAll());
	}

	public DTO findById(Long id) {
		return mapper.toDto(repository.findById(id).orElseThrow(() -> new SystemNotFound("Não encontrado.")));
	}
}
